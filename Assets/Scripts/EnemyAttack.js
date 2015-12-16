var percentage : int;
var percentage2 : int;
var laser : GameObject;
var rocket1 : GameObject;
var player : GameObject;
var heading = Vector3;
var hit : RaycastHit;

function Start(){
player = GameObject.Find("Player");
}
function Update () {
percentage = Random.Range(0, 100);
percentage2 = Random.Range(0, 100);
var heading =  player.transform.position - this.transform.position;
	if (percentage <= 5)
	{
		if (Physics.Raycast (transform.position, heading, hit, 25)) 
		{
			if(hit.collider.tag == "Player")
			{
			Instantiate(laser, this.transform.position, Quaternion.identity);
			}
		}
	}
	if (percentage <= 1)
	{
			if (Physics.Raycast (transform.position, heading, hit, 25)) 
			{
				if(hit.collider.tag == "Player")
				{
				Instantiate(rocket1, this.transform.position, Quaternion.identity);
				}
			}

	}
}