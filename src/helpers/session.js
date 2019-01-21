
export default {
  set: id => sessionStorage.setItem('userId', id),
  get: () => sessionStorage.getItem('userId')
}
