import React, { useState } from 'react'
import AppHeader from '../../widgets/header/AppHeader.js'
import Lot from '@shared/ui/lot/Lot'

const LotPage = ({ title }) => {
    return (
        <>
            <AppHeader title={title} />
            <Lot />
        </>
    )
}

export default LotPage