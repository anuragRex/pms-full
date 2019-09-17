import { gql } from 'apollo-boost';

const getAllSocialData =gql`
    query {
        getAllSocialData{
            id,
            associations,
            selfEvaluation
            productServices,
            competitor,
            partnerships
        }
    }
`;;

export { getAllSocialData };