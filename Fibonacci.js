// a function to generate fibonacci numbers
function myFunction(number)
{
    if (number == 0)         // This is to cater for the initial sequence numbers (0, and 1)
    {
        return [0];
    }
    else if (number == 1)
    {
        return [0, 1];
    }
    else
    {
        var n = myFunction(number - 1);           // n represents the nth - term required
        n.push(n[n.length - 1] + n[n.length - 2]);
        return n;        
    }
}
// This may not be the most efficient method, but all you have to do is call myFunction(...)
// and the system gives the fibonacci sequence up to that number.
