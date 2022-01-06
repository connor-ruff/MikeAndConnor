import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {Dropdown, Input, Button} from 'semantic-ui-react'
import Select from 'react-select'
import {useAlert} from 'react-alert';
import '../CSS/Birding.css'


export default function BirdAdd(props){

    const alert = useAlert()

    const [birdList, setBirdList] = useState([])
    const [loadingState, setLoadingState] = useState(1)
    const [dateState, setDateState] = useState('')
    const [cityState, setCityState] = useState('')
    const [stateState, setStateState] = useState('')
    const [detailsState, setDetailsState] = useState('')
    const [allBirds, setAllBirds] = useState([])


    useEffect( async () => {
        await fetch('https://ruffapi.azurewebsites.net/getAllBirds')
        .then((response) => response.json())
        .then((json) => setAllBirds(json['Message']))

        await setLoadingState(0)
       
    }, []);

    useEffect( () => {
        console.log('AllBirds...')
        console.log(allBirds)
    }, [allBirds])

    const addBirdEntry = (value) => {
        console.log(value)
        setBirdList(value)        
    }

    const submitBirds = () => {
      
        console.log('State of BirdList: ' + birdList)
        console.log('State of Date: ' + dateState)
        console.log('State of City: ' + cityState)
        console.log('State of State: ' + stateState)
        console.log('State of Details: ' + detailsState)
        

        const birdObj = {
            birds: birdList,
            date: dateState,
            city: cityState,
            state: stateState,
            details: detailsState
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify(birdObj)
        }

        console.log(requestOptions)
        
        fetch('https://ruffapi.azurewebsites.net/addToYear2022', requestOptions)
        .then((response) => response.json())
        .then((json) => {
            if (json['Result'] == 'Failure'){
                let errorString = 'Error Calling addToYear2022/ \n' + json['Message']
                let usageString = json['Usage']
                alert.error(errorString)
                alert.show(usageString)
            } else {
                let succString = 'Added To 2022 List: \n' + json['Message']['AddedToYear']
                alert.success(succString)
            }
        })
            
        fetch('https://ruffapi.azurewebsites.net/addToLife', requestOptions)
        .then((response) => response.json())
        .then((json) => {
            if (json['Result'] == 'Failure'){
                let errorString = 'Error Calling addToLife/'
                let usageString = json['Usage']
                alert.error(errorString)
                alert.show(usageString)

            } else {
                let succString = 'Added To Life List: \n' + json['Message']['AddedToLife']
                alert.success(succString)
            }
        })

        setStateState('')
        setCityState('')
        setDateState('')
        setDetailsState('')
        setBirdList([])


      
        
    }

    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          
          return {
            ...styles,
            backgroundColor: 'black',
            color: '#FFF',
            cursor:'black',
           
          };
        },
      
      };



    return (
        <div className='addBirdMain' >
            
        
        <h1 style={{marginBottom: 100, padding: 50}}>Adding a Bird...</h1>
        <Button style={{marginBottom: 20}} onClick={() => props.history.push('/bird')}>GO BACK</Button>
          {
              loadingState == 1 ? 
              <p>Loading...</p>
               :

          
            <Container>
            <Row>
            <Col xs={6}>

                <Select 
                    options={allBirds}
                    onChange={addBirdEntry}
                    isMulti
                    classNamePrefix='Birds to Add...'
                    styles={colourStyles}
                    value={birdList}
                />
           {/* <Dropdown
                placeholder='Select Birds...'
                fluid
                multiple
                search
                selection
                options={allBirds}
                onChange={addBirdEntry}
                value={birdList}
            /> */}
            </Col>

            <Col xs={5}>
            <Input style={{padding: '4px'}} placeholder='Enter Date (YYYY-MM-DD)....' onChange={(event, {value}) => setDateState(value)} value={dateState} />
            <Input style={{padding: '4px'}} placeholder='Enter City....' onChange={(event, {value}) => setCityState(value)} value={cityState} />
            <Input style={{padding: '4px'}} placeholder='Enter State....' onChange={(event, {value}) => setStateState(value)} value={stateState} />
            <Input style={{padding: '4px'}} placeholder='Enter Details....' onChange={(event, {value}) => setDetailsState(value)} value={detailsState} />
            

            </Col>
            <Col xs={1}>
            <Button onClick={submitBirds}>Submit</Button>
            </Col>
            </Row>
            </Container>
           

          }
            
        
        </div>
    );
}