import React, { Component } from 'react';
import '../CSS/Hockey.css'

class TeamGen extends Component {



    render(){
        return (

            <div class = "teamList" name = "NHL Team">
                        <button class = "teamListBtn">Select Team</button>
                        <div class = "teamList-content">
                            <a onClick={() => this.props.newTeam(0)}>
                                Anaheim</a>
                            <a onClick={() => this.props.newTeam(1)}>
                                Arizona</a>
                            <a onClick={() => this.props.newTeam(2)}>
                                Boston</a>
                            <a onClick={() => this.props.newTeam(3)}>
                                Buffalo</a>
                            <a onClick={() => this.props.newTeam(4)}>
                                Carolina</a>
                            <a onClick={() => this.props.newTeam(5)}>
                                Columbus</a>
                            <a onClick={() => this.props.newTeam(6)}>
                                Calgary</a>
                            <a onClick={() => this.props.newTeam(7)}>
                                Chicago</a>
                            <a onClick={() => this.props.newTeam(8)}>
                                Colorado</a>
                            <a onClick={() => this.props.newTeam(9)}>
                                Dallas</a>
                            <a onClick={() => this.props.newTeam(10)}>
                                Detroit</a>
                            <a onClick={() => this.props.newTeam(11)}>
                                Edmonton</a>
                            <a onClick={() => this.props.newTeam(12)}>
                                Florida</a>
                            <a onClick={() => this.props.newTeam(13)}>
                                LA Kings</a>
                            <a onClick={() => this.props.newTeam(14)}>
                                Minnesota</a>
                            <a onClick={() => this.props.newTeam(15)}>
                                Montreal</a>
                            <a onClick={() => this.props.newTeam(16)}>
                                New Jersey</a>
                            <a onClick={() => this.props.newTeam(17)}>
                                Nashville</a>
                            <a onClick={() => this.props.newTeam(18)}>
                                NY Islanders</a>
                            <a onClick={() => this.props.newTeam(19)}>
                                NY Rangers</a>
                            <a onClick={() => this.props.newTeam(20)}>
                                Ottawa</a>
                            <a onClick={() => this.props.newTeam(21)}>
                                Philadelphia</a>
                            <a onClick={() => this.props.newTeam(22)}>
                                Pittsburgh</a>
                            <a onClick={() => this.props.newTeam(23)}>
                                San Jose</a>
                            <a onClick={() => this.props.newTeam(24)}>
                                St. Louis</a>
                            <a onClick={() => this.props.newTeam(25)}>
                                Tampa Bay</a>
                            <a onClick={() => this.props.newTeam(26)}>
                                Toronto</a>
                            <a onClick={() => this.props.newTeam(27)}>
                                Vancouver</a>
                            <a onClick={() => this.props.newTeam(28)}>
                                Vegas</a>
                            <a onClick={() => this.props.newTeam(29)}>
                                Winnipeg</a>
                            <a onClick={() => this.props.newTeam(30)}>
                                Washington</a>
                            </div>
                    </div> 
            
        );
    }

}

export default TeamGen;