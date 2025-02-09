const getResultAge = (millisecond) => {
  const resultMillisecond = new Date().getTime() - Number(millisecond);
  const day = Math.floor(
    ((resultMillisecond % 31556926080) % 2630016000) / 86400000
  );
  const month = Math.floor((resultMillisecond % 31556926080) / 2630016000);
  const year = Math.floor(resultMillisecond / 31556926080);
  const number_of_days = Math.floor(resultMillisecond / 86400000);

  if (day < 0 || month < 0 || year < 0 || number_of_days < 0)
    return "date_birth_not_valid";

  const information = [
    {
      text_information: `You have lived for ${number_of_days} days since you were born in this world, may you always be healthy and happy!`,
      time_information: `${day} Days ${month} Months ${year} Years`,
    },
  ];

  return information;
};

export default getResultAge;
