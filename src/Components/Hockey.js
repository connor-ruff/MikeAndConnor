import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import '../CSS/Hockey.css'
import NHLrunningFUO from '../Images/NHLrunningFUO.jpg'
import homeTeamATSAfterVegasWL from '../Images/homeTeamATSAfterVegasWL.png'
import homeTeamATSAfter2Days from '../Images/homeTeamATSAfter2Days.jpg'
import rinkBackground from '../Images/rinkBackground1.png'
import hockeyPlayer from '../Images/hockeyplayer.gif'
import hockeyGoalie from '../Images/hockeyGoalie.gif'

import anaRolling from '../Images/NHLTeamRolling/anaRolling.png'
import ariRolling from '../Images/NHLTeamRolling/ariRolling.png'
import bosRolling from '../Images/NHLTeamRolling/bosRolling.png'
import bufRolling from '../Images/NHLTeamRolling/bufRolling.png'
import carRolling from '../Images/NHLTeamRolling/carRolling.png'
import cbjRolling from '../Images/NHLTeamRolling/cbjRolling.png'
import cgyRolling from '../Images/NHLTeamRolling/cgyRolling.png'
import chiRolling from '../Images/NHLTeamRolling/chiRolling.png'
import colRolling from '../Images/NHLTeamRolling/colRolling.png'
import dalRolling from '../Images/NHLTeamRolling/dalRolling.png'
import detRolling from '../Images/NHLTeamRolling/detRolling.png'
import edmRolling from '../Images/NHLTeamRolling/edmRolling.png'
import flaRolling from '../Images/NHLTeamRolling/flaRolling.png'
import lakRolling from '../Images/NHLTeamRolling/lakRolling.png'
import minRolling from '../Images/NHLTeamRolling/minRolling.png'
import mtlRolling from '../Images/NHLTeamRolling/mtlRolling.png'
import njdRolling from '../Images/NHLTeamRolling/njdRolling.png'
import nshRolling from '../Images/NHLTeamRolling/nshRolling.png'
import nyiRolling from '../Images/NHLTeamRolling/nyiRolling.png'
import nyrRolling from '../Images/NHLTeamRolling/nyrRolling.png'
import ottRolling from '../Images/NHLTeamRolling/ottRolling.png'
import phiRolling from '../Images/NHLTeamRolling/phiRolling.png'
import pitRolling from '../Images/NHLTeamRolling/pitRolling.png'
import sjsRolling from '../Images/NHLTeamRolling/sjsRolling.png'
import stlRolling from '../Images/NHLTeamRolling/stlRolling.png'
import tblRolling from '../Images/NHLTeamRolling/tblRolling.png'
import torRolling from '../Images/NHLTeamRolling/torRolling.png'
import vanRolling from '../Images/NHLTeamRolling/vanRolling.png'
import vgkRolling from '../Images/NHLTeamRolling/vgkRolling.png'
import wpgRolling from '../Images/NHLTeamRolling/wpgRolling.png'
import wshRolling from '../Images/NHLTeamRolling/wshRolling.png'

import TeamGen from './TeamGen'

class Hockey extends Component {
    constructor(){
        super()
        this.state ={
            tab: 0,
            ana : {
                team: anaRolling
            },
            ari : {
                team: ariRolling
            },
            bos : {
                team: bosRolling
            },
            buf : {
                team: bufRolling
            },
            car : {
                team: carRolling
            },
            cbj : {
                team: cbjRolling
            },
            cgy : {
                team: cgyRolling
            },
            chi : {
                team: chiRolling
            },
            col : {
                team: colRolling
            },
            dal : {
                team: dalRolling
            },
            det : {
                team: detRolling
            },
            edm : {
                team: edmRolling
            },
            fla : {
                team: flaRolling
            },
            lak : {
                team: lakRolling
            },
            min : {
                team: minRolling
            },
            mtl : {
                team: mtlRolling
            },
            njd : {
                team: njdRolling
            },
            nsh : {
                team: nshRolling
            },
            nyi : {
                team: nyiRolling
            },
            nyr : {
                team: nyrRolling
            },
            ott : {
                team: ottRolling
            },
            phi : {
                team: phiRolling
            },
            pit : {
                team: pitRolling
            },
            sjs : {
                team: sjsRolling
            },
            stl : {
                team: stlRolling
            },
            tbl : {
                team: tblRolling
            },
            tor : {
                team: torRolling
            },
            van : {
                team: vanRolling
            },
            vgk : {
                team: vgkRolling
            },
            wpg : {
                team: wpgRolling
            },
            wsh : {
                team: wshRolling
            }
        }
    }
    newTeam = (code) => {
        var newState = {};
        newState['tab'] = code;
        this.setState(newState);
    }

    render() {
        let dispObj;
        if (this.state.tab === 0) dispObj = this.state.ana
        else if (this.state.tab === 1) dispObj = this.state.ari
        else if (this.state.tab === 2) dispObj = this.state.bos
        else if (this.state.tab === 3) dispObj = this.state.buf
        else if (this.state.tab === 4) dispObj = this.state.car
        else if (this.state.tab === 5) dispObj = this.state.cbj
        else if (this.state.tab === 6) dispObj = this.state.cgy
        else if (this.state.tab === 7) dispObj = this.state.chi
        else if (this.state.tab === 8) dispObj = this.state.col
        else if (this.state.tab === 9) dispObj = this.state.dal
        else if (this.state.tab === 10) dispObj = this.state.det
        else if (this.state.tab === 11) dispObj = this.state.edm
        else if (this.state.tab === 12) dispObj = this.state.fla
        else if (this.state.tab === 13) dispObj = this.state.lak
        else if (this.state.tab === 14) dispObj = this.state.min
        else if (this.state.tab === 15) dispObj = this.state.mtl
        else if (this.state.tab === 16) dispObj = this.state.njd
        else if (this.state.tab === 17) dispObj = this.state.nsh
        else if (this.state.tab === 18) dispObj = this.state.nyi
        else if (this.state.tab === 19) dispObj = this.state.nyr
        else if (this.state.tab === 20) dispObj = this.state.ott
        else if (this.state.tab === 21) dispObj = this.state.phi
        else if (this.state.tab === 22) dispObj = this.state.pit
        else if (this.state.tab === 23) dispObj = this.state.sjs
        else if (this.state.tab === 24) dispObj = this.state.stl
        else if (this.state.tab === 25) dispObj = this.state.tbl
        else if (this.state.tab === 26) dispObj = this.state.tor
        else if (this.state.tab === 27) dispObj = this.state.van
        else if (this.state.tab === 28) dispObj = this.state.vgk
        else if (this.state.tab === 29) dispObj = this.state.wpg
        else if (this.state.tab === 30) dispObj = this.state.wsh
        else {
            dispObj = this.state.ana
        }
        return (
            <Container style={{backgroundImage: `url(${rinkBackground})`, padding: '5px', minWidth: '1000px', textIndent: '10px'}} fluid>
                <Row id='headerR'>
                    <img src={hockeyPlayer} alt='' style={{ alignItems: 'left', height:'125px', width: '125px', paddingRight: '25px'}}/>
                    <Col>
                        <h1 style={{color: 'white', textAlign: 'center', paddingTop: '10px'}}>NHL Hockey Analysis</h1>
                        <h5 style={{color: 'white', textAlign: 'center'}}>Michael Beebe</h5>
                    </Col>
                    <img src={hockeyGoalie} alt='' style={{ alignItems: 'left', height:'125px', width: '125px', paddingRight: '25px'}}/>
                </Row>
                <Row>
                    <Col xs={4} style={{marginTop: '70px', marginLeft: '150px', paddingBotton: '50px', textAlign: 'center'}}>
                        <Container id='headerR'>
                            <h5 style={{color: 'white', paddingBottom: '10px'}}>20/21 Individual Team Success</h5>
                            <h6 id='paragraph' style={{textAlign: 'left'}}>Select NHL Team to view their success against Vegas' assumptions across the 20/21 season:</h6>
                            <TeamGen newTeam={this.newTeam}/>
                            <p id='paragraph' style={{marginTop: '40px', textAlign: 'left'}}>
                                Listed in order from Game 0 - Game 56, measuring the running success against Implied Odds of victory in each game.
                            </p>
                            <p id='paragraph2' style={{textAlign: 'left'}}>
                                *Current Success = (Regulation Win?) - (Implied Odds of Regulation Win) + (Previous Success)
                            </p>
                        </Container>
                    </Col>
                    <Col xs={6}>
                        <Container id='headerR'>
                            <h5 style={{color: 'white', textAlign: 'center', paddingBottom: '2px'}}>Team Success Over 2020/21 NHL Season</h5>
                            <img src={dispObj.team} alt='Default Team' 
                                style={{ height: '450px', width: '700px', padding: '15px', 
                                    textAlign: 'center',
                                    display: 'block',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: 'auto'}}></img>
                        </Container>
                    </Col>
                </Row>
                <Row style={{padding: '15px', borderRadius: '3px'}}>
                    <Col id='headerR'>
                        <Row>
                            <Col xs={5}>
                                <h5 style={{color: 'white', textAlign: 'center', paddingTop: '150px', paddingLeft: '50px'}}>20/21 Favorite, Underdog, and Overtime Running Success Rate (vs. Implied Odds)</h5>
                                <p id='paragraph' style={{textAlign: 'center', paddingTop: '50px', paddingLeft: '50px'}}>
                                    Measuring the running profit of "betting" $10 on favorite regulation win, underdog regulation win, and overtime (regulation tie) 
                                    in every game throughout the 2020-21 NHL regular season. Presented in order from Game 0 to Game 866.
                                </p>
                            </Col>
                            <Col>
                                <img src={NHLrunningFUO} alt='Running Fav Dog OT' style={{
                                     height: '500px', width: '900px', paddingTop: '15px', paddingBottom:'10px', textAlign: 'center',
                                     display: 'block',
                                     justifyContent: 'center',
                                     alignItems: 'center',
                                     margin: 'auto'}}></img>
                            </Col>
                        </Row>
                    </Col>      
                </Row>
                <Row id='headerR'>
                    <Col id='headerR'>
                        <h5 style={{color: 'white', textAlign: 'center'}}>20/21 Home Team Success Rate (vs. Implied Odds) Following 1 Day of Over/Underperformance</h5>
                        <img src={homeTeamATSAfterVegasWL} alt='Home Post Vegas WL' style={{ height: '400px', width: '600px', padding: '5px', textAlign: 'center',
                                    display: 'block',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: 'auto'}}></img>
                        <p id='paragraph' style={{paddingTop: '10px'}}>
                            Measured in (number of home wins on day - number of expected home wins on day). If the day prior had a positive return, then 
                            home teams overperformed (and vice versa). Overall, betting line expectations out-perform home team wins in both scenarios. 
                            I found that, on average, home teams fail to meet betting expectations following overperformance by approx. 4.01% against 
                            the implied odds for all home teams that day. Betting on home teams the day following a home team underperformance against the 
                            betting line would lead to an average loss of 6.66%. 
                        </p>
                        <p id='paragraph2'>
                            *The number of days where home teams underperformed = 69, overperformed = 56. Total success of home teams is less than 
                            implied odds by approx. 5.82%. 
                        </p>
                    </Col>
                    <Col id='headerR'>
                        <h5 style={{color: 'white', textAlign: 'center'}}>20/21 Home Team Success Rate (vs. Implied Odds) Following 2 Days of Over/Underperformance</h5>
                        <img src={homeTeamATSAfter2Days} alt='Home Post 2 Days' style={{ height: '400px', width: '600px', padding: '5px', textAlign: 'center',
                                    display: 'block',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: 'auto'}}></img>
                        <p id='paragraph' style={{paddingTop: '10px'}}>
                            However, if I only check success rate following 2 straight days of home over/underperformance, positive success rates 
                            begin to emerge. Betting line expectations still outperform home team success following 2 days of home overperformance, but 
                            home teams beat implied odds following 2 days of underperformance. Following 2 days of overperformance, home teams underperform 
                            against implied odds by 12.03% on average. On a day following 2 days of underperformance, however, home teams exceed 
                            implied odds by 7.86% on average.  
                        </p>
                        <p id='paragraph'>
                            "Betting" on home teams following 2 days of home team underperformance would yield an overall positive return of 314.4% throughout 
                            the duration of the 2020-2021 NHL season. 
                        </p>
                        <p id='paragraph2'>
                            *The number of days following 2 days where home teams underperformed = 40, overperformed = 27.
                        </p>
                    </Col>
                </Row>
                <Row id='headerR' style={{marginTop: '35px'}}>
                    <Col xs={6}>
                        <h3 style={{color: 'white', textAlign: 'center', marginBottom: '40px'}}>Additional Findings:</h3>
                        <p id='paragraph'>
                            Post 1 Day of Away under/overperformance: away teams underperformed by 29.1%/29.4%
                        </p>
                        <p id='paragraph'>
                            Post 2 Days of Away under/overperformance: away teams underperformed by 23.5%/44.0%
                        </p>
                        <p id='paragraph'>
                            Post 1 Day of Favorite under/overperformance: favorite teams overperformed by 13.8%/underperformed by 37.2%
                        </p>
                        <p id='paragraph'>
                            Post 2 Days of Favorite under/overperformance: favorite teams overperformed by 28.2%/underperformed by 50.7%
                        </p>
                        <p id='paragraph'>
                            Post 1 Day of Underdogs under/overperformance: underdog teams underperformed by 20.2%/25.1%
                        </p>
                        <p id='paragraph'>
                            Post 2 Days of Underdogs under/overperformance: underdog teams underperformed by 21.0%/14.9%
                        </p>
                        <p id='paragraph2'>
                            *Averages calculated by ((total ___ wins) - (total ___ implied wins)) / (# of game days measured)
                        </p>
                    </Col> 
                    <Col xs={6}>
                        <h3 style={{color: 'white', textAlign: 'center', marginBottom: '20px'}}>About:</h3>
                        <p id='paragraph'>
                            Using historical odds and result data from OddsPortal.com, 
                            I was able to find the success rates for continuously betting 
                            on specific outcomes. This data chart represents the results of 
                            only betting on favorites, underdogs, or overtime throughout the 
                            2020/21 NHL season. 
                        </p>
                        <p id='paragraph'>
                            I copied game result tables directly from the site in a format similar to: "07 Jul 2021 - Play Offs	1	X	2	B's 
                            20:00	Tampa Bay Lightning - Montreal Canadiens 	1:0	1.66 4.50 4.37 14" 
                            into more readable text using a Java program that reorganized the input into: 
                            "H TBL 1 MTL 0 .602 .222 .229".
                        </p>
                        <p id='paragraph'>
                            Using a scanner, I input the now-readable text into one of my Java programs 
                            to give the result of various betting strategies. These strategies include 
                            "betting" certain implied odds dependent on past outcomes, specifically 
                            tracking previous team outcomes given certain odds, and "betting" on a 
                            favorite/underdog/etc. if it has been recently losing or winning money.
                        </p>
                        <p id='paragraph2'>
                            *All input information is given in "Three Way Lines," meaning the odds are set for Team A regulation win, 
                            Team B regulation win, and regulation tie (game goes to OT). Furthermore, betting odds sum to over 
                            100% (usually approx. 105%) because odds makers need guaranteed returns in order to profit. 
                        </p>
                    </Col> 
                </Row>
            </Container>
        )
    }
}

export default Hockey
