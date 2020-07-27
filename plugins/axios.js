export default ({app: {$axios, $cookies }}) => {
  $axios.defaults.timeout = 30000
}