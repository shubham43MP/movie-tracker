import bookData from '../../seeds/bookdata.json'

const fetchBooksData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bookData?.data) resolve(bookData.data)
      else reject(new Error('Error: Data doesnot exist'))
    }, 2500)
  })
}

export default fetchBooksData
