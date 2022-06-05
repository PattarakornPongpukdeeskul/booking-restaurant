export let userTable = []

export class databaseUser {
  constructor(id = "", name = "", email = "", password = "", booking = []) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.booking = booking
  }

  getAllUsers() {
    return userTable
  }

  createUser() {
    const dataCreated = {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      booking: this.booking,
    }

    userTable.push(dataCreated)
    return dataCreated
  }

  updateUser() {
    const isIdExist = userTable.some((data) => data.id === this.id)
    if (isIdExist) {
      const dataUpdated = {
        id: this.id,
        name: this.name,
        email: this.email,
        password: this.password,
        booking: this.booking,
      }

      Object.keys(dataUpdated).forEach((key) => {
        if (
          dataUpdated[key] === "" ||
          (typeof dataUpdated[key] === "object" &&
            dataUpdated[key].length === 0)
        ) {
          delete dataUpdated[key]
        }
      })

      const newTable = userTable.map((row) =>
        row.id === this.id ? { ...row, ...dataUpdated } : row
      )

      userTable = newTable
      return dataUpdated
    }

    return "data not exist"
  }

  queryUser() {
    const dataQuery = {
      id: this.id,
      email: this.email,
      password: this.password,
    }

    Object.keys(dataQuery).forEach((key) => {
      if (dataQuery[key] === "") {
        delete dataQuery[key]
      }
    })

    const dataUser = userTable.filter(
      (data) =>
        data.id === this.id ||
        (data.email === this.email && data.password === this.password)
    )[0]

    return dataUser
  }

  deleteUser() {
    const isIdExist = userTable.some((data) => data.id === this.id)
    if (isIdExist) {
      userTable = userTable.filter((data) => data.id !== this.id)
      return true
    }
    return false
  }
}
