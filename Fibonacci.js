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
		return number + Fibonnaci(number - 1);  // Hello Tim, This looks like a recursion to me since Fibonnaci is the name of the function; or is that the way javascript works?
	}
}


