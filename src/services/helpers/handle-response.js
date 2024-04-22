export default function handleResponse(response) {
   return response.text().then((text) => {
      if (response.status >= 400 && response.status < 600)
         throw text && JSON.parse(text);
      return text && JSON.parse(text);
   });
}
