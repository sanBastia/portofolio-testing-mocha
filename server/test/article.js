const chai = require('chai')
const expect = require('chai').expect

const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = 'http://localhost:3000'

describe('Testing Article', function () {
  // it('result - Post an article', function (done) {
  //   chai.request(app)
  //     .post('/article')
  //     .send({
  //       title: 'This is my Story',
  //       body: 'This is about my life @hacktiv8',
  //       author: 'Irsan'
  //     })
  //     .end(function (err, res) {
  //       expect(res.body).to.have.property(
  //         'title'
  //       )
  //       done()
  //     })
  // })
  // DIUNCOMMENT APABILA UNTUK MENGECEK BISA POST ARTICLE ATAU TIDAK

  it('result - Get all article', function (done) {
    chai.request(app)
      .get('/articles')
      .end(function (err, res) {
        expect(res.body).to.have.lengthOf(6)
        done()
      })
  })

// it('result - Delete an Article', function (done) {
//   chai.request(app)
//     .delete('/article')
//     .send({
//       title: 'Cerita yang akan dihapus Part 2'
//     })
//     .end(function (err, res) {
//       expect(res.text).to.equal('Successfully Deleted')
//       done()
//     })
// })
//  DIUNCOMMENT APABILA UNTUK MENGECEK DELETE Article berdasarkan JUDUL / title
})
