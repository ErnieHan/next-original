import React from 'react'
// containers
import DiamondsTable from './DiamondsTable'
// components
import OrderTab from '../../../components/OrderTab'
import ViewTotal from '../../../components/ViewTotal'
import DiamondDialog from '../../../components/DiamondDialog'

function Diamond() {
  return (
    <div className="solitaire-diamond">
      <div className="diamond-left-wrap">
        <OrderTab />
        <ViewTotal count={6921} />
      </div>
      <div className="diamond-right-wrap">
        <DiamondsTable />
      </div>
      <DiamondDialog />
    </div>
  )
}

export default Diamond
