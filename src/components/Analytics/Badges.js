import React, { Component } from 'react';
import Badges1 from './Badges/Badges1';
import Badges2 from './Badges/Badges2';
import Badges3 from './Badges/Badges3';
import Badges4 from './Badges/Badges4';

let moment = require('moment')

class Badges extends Component {


    newMonthClients=() =>{
        let currentMonth = moment().format('L').split('/')[0]
        let currentYear= new Date().getFullYear()-1
        let newMC = this.props.clients.filter(c => c.firstContact.split("-")[0] === currentYear.toString() && c.firstContact.split("-")[1]=== currentMonth)
        return newMC
    }

    emailSent=()=>{
        return this.props.clients.filter(c=> c.emailType !==null).length
    }

    outStanding=()=>{
        return this.props.clients.filter(c => c.sold == false).length
    }


    hottestCountry= () =>{
        let breakdown= {}
        for(let c of this.props.clients){
            if(breakdown[c.country]){
                breakdown[c.country]+= 1
            }
            else{
                breakdown[c.country] = 1
            }
        }

        let arrV =  Object.values(breakdown);
        let max= Math.max(...arrV);
        return Object.keys(breakdown).find(key=> breakdown[key] === max);
    }


    render() {
        let currentMonthString = moment().format("LLL").split(' ') [0]

        return (
            <div className="badgesSection">
                <Badges1 newMonthClients={this.newMonthClients()} currentMonthString={currentMonthString} />
                <Badges2 emailSent={this.emailSent()}/>
                <Badges3 outStanding={this.outStanding()}/>
                <Badges4 hottest={this.hottestCountry()}/>
                
            </div>
        );
    }
}

export default Badges;