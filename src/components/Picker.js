import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Picker extends Component{
    render(){
        const{ value, onChange, options} = this.props
        return(
            <span>
                <h1>{value}</h1>
                <select onChange={e=>onChange(e.target.value)} value={value}>
                    {options.map(option=>(
                        <options value={option} key={option}>
                            {option}
                        </options>
                    ))}
                </select>
            </span>
        )
    }
}
Picker.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }