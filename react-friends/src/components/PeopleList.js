import React, { Component } from 'react';
import './PeopleList.css';

export const PeopleList = (props) => {
    return(
        <div>
            {
                props.people.map(person => {
                    return(
                        <div className="box" key = {person.email}>
                            <p>{person.first_name} {person.last_name}</p>
                            <p>{person.email}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}