//USERS

//GET /users/current

//response 201
type userGetResponse201 = {
    fullName: string,
    photoUrl: string,
    progress: {
        lvl: string,
        pointsCurr: string,
        pointsTotal: string
    }
    criteria: { // відповіді з форми при реєстрації, може змінитись
        name: string,
        imgUrl: string,
    }[],
    achievements: {
        name: string,
        imgUrl: string
    }[],
    interests: {
        name: string,
        coef: string
    }[],
    placesVisitHistory: {
        name: string,
        dataTime: string
    }[]
}

//response 404 (not exist)
type userGetResponse404 = {
    developerMessage: string,
    userMessage: string
}

//DELETE /users/current
//logout include

//request
type userDeleteRequest = {
}

//response 201
type userDeleteResponse201 = {
    userMessage: string
}

//response 404 (incorrect token)
type userDeleteResponse404 = {
    developerMessage: string,
    userMessage: string
}

// POST /users/current/visits

//request
type VisitHistoryPostRequest = {
    placeName: string,
    dataTime: string
}

//response 404
type VisitHistoryPostResponse404 = {
    developerMessage: string
}


//USER-MANAGEMENT

// POST user-management/register

//request
export type RegisterRequestData = {
    username: string,
    email: string,
    password: string
}

//response 201
export type RegisterResponse201 = {
    token: string
}

// POST user-management/sign-in

//request
export type SignInRequestData = {
    email: string
    password: string
}

//response 201
export type SignInResponse201 = {
    token: string
}

//response 405 (mail already exist)
type signInResponse405 = {
    developerMessage: string,
    userMessage: string
}

// POST user-management/sign-out

//request
type signOutPostRequest = {
}

//response 201
type signOutPostResponse201 = {
    sessionToken: string
    refreshToken: string
}

//response 404 (incorrect token)
type userPostResponse405 = {
    developerMessage: string,
    userMessage: string
}


//PLACES

// GET /places

//response 201
type placesGetResponse201 = {
    places: {
        name: string,
        nameForUser: string,
        location: {
            x: string,
            y: string
        },
        visitTime: string,
        visitCost: string,
        categories: {
            name: string,
            nameForUser: string,
            imgUrl: string
        }[]
    }
}


//SURVEYS

// GET /surveys

//response 201
type surveysGetResponse404 = {
    welcome: surveyData,
    profile: surveyData,
    autoRoute: surveyData
}

type surveyData = {
    name: string,
    userName: string
    questions: {
        name: string
        text: string,
        answerOptions: string[]
    }[]
}

// POST /surveys/{welcome, profile}/answers

//request
type surveyPostRequest = {
    answers: {
        name: string,
        answer: string
    }[]
}

//response 201
type surveyPostResponse201 = {
    userMessage: string
}

//response 404
type surveyPostResponse404 = {
    developerMessage: string,
    userMessage: string
}

// POST /surveys/{auto-route}/answers

//request
type surveyAutoRoutePostRequest = {
    answers: {
        name: string,
        answer: string
    }[]
}

//response 201
type surveyAutoRoutePostResponse201 = {
    route: {
        x: string,
        y: string
    }[]
}

//response 404
type surveyAutoRoutePostResponse404 = {
    developerMessage: string,
    userMessage: string
}

