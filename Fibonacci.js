// a function to generate fibonacci numbers
function Fibonnaci(int number){
	if (limit == 1)
	{
		return 1;
	}
	else if (limit == 0)
	{
		return 1;
	}
	else
	{
		return number + Fibonnaci(number - 1);
	}
}


