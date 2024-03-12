export default function getToken() {
  const url = window.location.href;
  const token = url.split("token=")[1];
  return token;
}
