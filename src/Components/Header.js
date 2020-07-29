import React from 'react'
import Typography from '@material-ui/core/Typography'


export default function Header() {
    const headerStyles = {
        backgroundColor: '#AAAAAA',
    }

    return (
        <div style ={headerStyles}>
            <Typography style={{ padding: 16 }} variant='h1'>
                Listronic by Sam Jo
            </Typography>
        </div>
    )
}
