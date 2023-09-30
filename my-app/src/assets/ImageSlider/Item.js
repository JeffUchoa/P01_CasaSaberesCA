import { Paper} from '@mui/material'

function Item({item})
{
    return (
        <Paper>
            <img src= {item.image} alt='aaaa' />

        </Paper>
    )
}

export default Item