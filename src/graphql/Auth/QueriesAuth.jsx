import { gql } from '@apollo/client'

export const REFRESCAR_TOKEN = gql`
    query RefrescarTokenUsuario {
        refrescarTokenUsuario {
            token
            errorAuth
        }
    }
`