// a function to generate fibonacci numbers
function Fibonnaci(int number)
{
	if (number == 1)
	{
		return 1;
	}
	else if (number == 0)
	{
		return 1;
	}
	else
	{
		return number + Fibonnaci(number - 1);
	}
}


