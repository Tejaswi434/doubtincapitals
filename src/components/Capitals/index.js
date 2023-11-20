import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {Country: countryAndCapitalsList[0].country}

  ChangeCapital = event => {
    const filtering = countryAndCapitalsList.filter(
      each => each.id.toLowerCase() === event.target.value.toLowerCase(),
    )
    console.log(filtering)
    console.log(filtering.id)
    this.setState({Country: filtering[0].country})
  }

  render() {
    const {Country} = this.state

    return (
      <div>
        <h1>Countries And Capitals</h1>
        <div className="rowing">
          <select onChange={this.ChangeCapital}>
            <option value="NEW_DELHI">NEW DELHI</option>
            <option value="LONDON">LONDON</option>
            <option value="PARIS">PARIS</option>
            <option value="KATHMANDU">KATHMANDU</option>
            <option value="HELSINKI">HELSINKI</option>
            <option value="Finland">Finland</option>
          </select>
          <p>{Country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
