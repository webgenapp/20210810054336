import React from 'react'

import CreateCoffee from './coffees/CreateCoffee'
import ListCoffee from './coffees/ListCoffee'
import DetailCoffee from './coffees/DetailCoffee'
import UpdateCoffee from './coffees/UpdateCoffee'

import CreateIcecream from './icecreams/CreateIcecream'
import ListIcecream from './icecreams/ListIcecream'
import DetailIcecream from './icecreams/DetailIcecream'
import UpdateIcecream from './icecreams/UpdateIcecream'

import CreateSandwich from './sandwichs/CreateSandwich'
import ListSandwich from './sandwichs/ListSandwich'
import DetailSandwich from './sandwichs/DetailSandwich'
import UpdateSandwich from './sandwichs/UpdateSandwich'

import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'

import { useQuery } from 'react-query'

function App() {
  return (
    <Router>
      <nav>
        <ul className='flex'>
          <li>
            <Link to='/'>Home</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/coffees'>Coffees</Link>
            <br />
            <Link to='/coffees/create'>Create a Coffee</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/icecreams'>Icecreams</Link>
            <br />
            <Link to='/icecreams/create'>Create a Icecream</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/sandwichs'>Sandwichs</Link>
            <br />
            <Link to='/sandwichs/create'>Create a Sandwich</Link>
            <br />
          </li>
        </ul>
      </nav>
      <main>
        <Route path='/coffees'>
          <h1>Coffees</h1>
        </Route>

        <Route path='/icecreams'>
          <h1>Icecreams</h1>
        </Route>

        <Route path='/sandwichs'>
          <h1>Sandwichs</h1>
        </Route>

        <Switch>
          {/* Coffee routes */}
          <Route path='/coffees/create' component={CreateCoffee} />
          <Route path='/coffees/update/:id' component={UpdateCoffee} />
          <Route path='/coffees/detail/:id' component={DetailCoffee} />
          <Route path='/coffees' component={ListCoffee} />,
          {/* Icecream routes */}
          <Route path='/icecreams/create' component={CreateIcecream} />
          <Route path='/icecreams/update/:id' component={UpdateIcecream} />
          <Route path='/icecreams/detail/:id' component={DetailIcecream} />
          <Route path='/icecreams' component={ListIcecream} />,
          {/* Sandwich routes */}
          <Route path='/sandwichs/create' component={CreateSandwich} />
          <Route path='/sandwichs/update/:id' component={UpdateSandwich} />
          <Route path='/sandwichs/detail/:id' component={DetailSandwich} />
          <Route path='/sandwichs' component={ListSandwich} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
