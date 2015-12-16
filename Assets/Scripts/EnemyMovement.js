var newspot : Vector3;
var percentage : int;
var treshold : float = 0.1;

function Start () {
FindNewSpot();
}

function Update () {
transform.position = Vector3.MoveTowards(this.transform.position, newspot, .01);
percentage = Random.Range(1,100);
if(Vector3.Distance(this.transform.position, newspot) <= treshold)
{
FindNewSpot();
}
}
function FindNewSpot()
{
newspot = Vector3(Random.Range(this.transform.position.x-2.5,this.transform.position.x+2.5), 1, Random.Range(this.transform.position.z-2.5,this.transform.position.z+2.5));
}