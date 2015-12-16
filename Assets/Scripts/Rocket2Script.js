var newspot : Vector3;
var percentage : int;
var treshold : float = 0.1;
var launchtime = 0;
var rocketLaunch : GameObject;

function Start () {
FindNewSpot();
}

function Update () {
transform.position = Vector3.MoveTowards(this.transform.position, newspot, .05);
percentage = Random.Range(1,100);
if(Vector3.Distance(this.transform.position, newspot) <= treshold)
	{
	FindNewSpot();
	}
launchtime +=1;
if(launchtime >=Random.Range(100,250))
	{
	Instantiate(rocketLaunch, this.transform.position, Quaternion.identity);
	Destroy(gameObject);
	}
}

function FindNewSpot()
{
newspot = Vector3(Random.Range(this.transform.position.x-1,this.transform.position.x+1), .5, Random.Range(this.transform.position.z-1,this.transform.position.z+1));
}