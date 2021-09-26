let userString = prompt("Enter the word:", "Test");

document.write(userString + "-------" + changeRegister(userString));

function changeRegister(userString)
{
	u_str = userString.split("");
	for(let i = 0; i < userString.length; i++)
	{
		if(u_str[i] == u_str[i].toUpperCase())
		{
			u_str[i] = u_str[i].toLowerCase();
		}
		else
		{
			u_str[i] = u_str[i].toUpperCase()
		}
	}
	let outString = u_str.join("");
	return outString;
}

