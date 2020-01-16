import gql from 'graphql-tag'

export const EVENT_DETAIL_DATA = gql`
  fragment EventDetail on Event {
    id
    title
    description
    start
    end
  }
`

export const ADDRESS_DETAIL_DATA = gql`
  fragment AddressDetail on Location {
    street_address
    street_address_2
    city
    zipcode
    state
  }
`
export const GET_EVENTS = gql`
  query EventsByRange($start: DateTime, $end: DateTime) {
    events(
      where: {
        OR: [
          {AND: [{start_lte: $start}, {end_gte: $end}]}
          {AND: [{start_gte: $start}, {end_lte: $end}]}
          {
            AND: [
              {AND: [{start_gte: $start}, {start_lte: $end}]}
              {end_gte: $end}
            ]
          }
          {
            AND: [
              {start_lte: $start}
              {AND: [{end_lte: $end}, {end_gte: $start}]}
            ]
          }
        ]
      }
    ) {
      ...EventDetail
      creator {
        id
      }
      locations {
        id
        name
        ...AddressDetail
      }
      event_images {
        url
      }
      tags {
        title
      }
    }
  }
  ${EVENT_DETAIL_DATA}
  ${ADDRESS_DETAIL_DATA}
`
export const GET_EVENTS_WITH_DISTANCE = gql`
  query EventsByRange(
    $start: DateTime
    $end: DateTime
    $userLatitude: Float
    $userLongitude: Float
  ) {
    events(
      where: {
        OR: [
          {AND: [{start_lte: $start}, {end_gte: $end}]}
          {AND: [{start_gte: $start}, {end_lte: $end}]}
          {
            AND: [
              {AND: [{start_gte: $start}, {start_lte: $end}]}
              {end_gte: $end}
            ]
          }
          {
            AND: [
              {start_lte: $start}
              {AND: [{end_lte: $end}, {end_gte: $start}]}
            ]
          }
        ]
      }
    ) {
      ...EventDetail
      creator {
        id
      }
      locations(userLatitude: $userLatitude, userLongitude: $userLongitude) {
        id
        name
        latitude
        longitude
        distanceFromUser
        distanceUnit
        ...AddressDetail
      }
      event_images {
        url
      }
      tags {
        title
      }
    }
  }
  ${EVENT_DETAIL_DATA}
  ${ADDRESS_DETAIL_DATA}
`

export const GET_ALL_TAGS = gql`
  query {
    tags {
      id
      title
    }
  }
`

export const GET_EVENT_BY_ID = id => {
  const QUERY = gql`
    query{
      events(where: {id: "${id}"}){
      ...EventDetail
      creator {
        id
      }
      locations {
        id
        name
        ...AddressDetail
      }
      event_images {
        url
      }
      tags{
        title
      }
    }

    }
    ${EVENT_DETAIL_DATA}
    ${ADDRESS_DETAIL_DATA}
  `
  return QUERY
}
