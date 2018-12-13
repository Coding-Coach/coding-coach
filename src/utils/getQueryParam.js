export function getQueryParam(param) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  const code = vars
    .map((i) => {
      const pair = i.split('=');
      if (pair[0] === param) {
        return pair[1];
      }

      return null;
    })
    .filter((d) => {
      if (d) {
        return true;
      }

      return false;
    });

  return code[0];
}
