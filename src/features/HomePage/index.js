
import React from 'react'
import LeftSide from '../../component/SideBar/LeftSide'
import Chat from '../../component/SideBar/MidSize'

const HomePage = () => {
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex' }}>
            <div style={{ width: '15%', minWidth: '300px' }}><LeftSide /></div>
            <div style={{ width: '70%', borderLeft: '1px solid rgb(245 245 245)', borderRight: '1px solid rgb(245 245 245)' }}><Chat /></div>
            <div style={{ width: '15%', }}>Right</div>
        </div>
    )
}

export default HomePage