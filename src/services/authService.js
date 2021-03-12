export const LOGIN_QUERY_PARAMS = `
  mutation input($username: String!, $password: Password!){
    logIn(input: {
      username: $username, password: $password
    }){
      access_token,
      token_type,
      refresh_token,
      expires_in,
      user {
        id,
        email,
        last_login,
        first_name,
        last_name,
        dob,
        gender,
        config {
          background_colour
        },
        profile {
          id,
          url,
          name,
          thumbnail,
          content_type,
        },
        profession,
        roles {
          id,
          name,
          slug,
          rolePermissions {
              name,
              value,
          },
          merchant_id,
          store_id
        }
        merchants {
          id,
          mid,
          tname,
          lname,
          mid,
          stores {
            id,
            merchant_id,
            sid,
            name,
            email,
            phone,
            address_id,
            address {
              line1,
              line2,
              city_town,
              country,
              postcode,
              county,
            },
          },
        }
      }
    }
  }
`