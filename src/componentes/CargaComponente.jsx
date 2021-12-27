import React from 'react'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

const CargaComponente = () => {
    return (
        <Stack spacing={2} direction="row">
            <CircularProgress className="text-green-400" color="inherit" />
        </Stack>
    )
}

export default CargaComponente
