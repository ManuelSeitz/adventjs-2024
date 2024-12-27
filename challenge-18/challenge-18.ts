function findInAgenda(
  agenda: string,
  phone: string
): { name: string; address: string } | null {
  const data = agenda.split('\n').map((item) => {
    const name = item
      .match(new RegExp(/<[a-zA-Z\s]+>/))?.[0]
      .replace('<', '')
      .replace('>', '');
    item = item.replace(`<${name}>` || '', '');

    const phone = item.match(
      new RegExp(/\+[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{3}/)
    )?.[0];
    item = item.replace(phone || '', '');

    return { name, phone, address: item.trim() };
  });

  const coincidences = data.filter((item) => item.phone?.includes(phone));

  if (coincidences.length !== 1) return null;

  return {
    name: coincidences[0].name as string,
    address: coincidences[0].address as string,
  };
}

export default findInAgenda;
