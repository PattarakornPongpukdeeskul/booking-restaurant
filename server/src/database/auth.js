export let authTable = []

export class databaseAuth {
  constructor(
    id = "",
    userId = "",
    refreshToken = "",
    accessToken = "",
    createdDate = "",
    expiredAt = ""
  ) {
    this.id = id
    this.userId = userId
    this.refreshToken = refreshToken
    this.accessToken = accessToken
    this.expiredAt = expiredAt
    this.createdDate = createdDate
  }

  getAllAuth() {
    return authTable
  }

  createAuth() {
    const dataCreated = {
      id: this.id,
      userId: this.userId,
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expiredAt: this.expiredAt,
      createdDate: this.createdDate,
    }
    authTable.push(dataCreated)

    return dataCreated
  }

  updateAuth() {
    const isIdExist = authTable.some((data) => data.id === this.id)
    if (isIdExist) {
      const dataUpdated = {
        id: this.id,
        userId: this.userId,
        refreshToken: this.refreshToken,
        accessToken: this.accessToken,
        expiredAt: this.expiredAt,
        createdDate: this.createdDate,
      }

      Object.keys(dataUpdated).forEach((key) => {
        if (dataUpdated[key] === "") {
          delete dataUpdated[key]
        }
      })

      const newTable = authTable.map((row) =>
        row.id === this.id ? { ...row, ...dataUpdated } : row
      )

      authTable = newTable
      return dataUpdated
    }

    return "data not exist"
  }

  queryAuth() {
    const dataUser = authTable.filter(
      (data) => data.id === this.id || data.userId === this.userId
    )[0]

    return dataUser
  }

  deleteAuth() {
    const isIdExist = authTable.some((data) => data.id === this.id)
    if (isIdExist) {
      authTable = authTable.filter((data) => data.id !== this.id)
      return true
    }
    return false
  }
}
