var globals : GameObject;
var globalScript : Globals;
var spark : GameObject;
var fireworks : GameObject;
var explosion : GameObject;
var player : GameObject;
var playerscript : AimAtCursor;

function Start(){
globals = GameObject.Find("Spawner");
globalScript = globals.GetComponent("Globals");
player = GameObject.Find("Player");
playerscript = player.GetComponent("AimAtCursor");
}

function OnCollisionEnter(other : Collision){
if(other.collider.tag == "EnemyBullet")
	{
	globalScript.health -= 2.5;
	Instantiate(spark, this.transform.position, Quaternion.identity);
	Destroy(other.gameObject);
	}
if(other.collider.name == "RocketLaunch")
	{
	globalScript.health -= 10;
	Instantiate(explosion, this.transform.position, Quaternion.identity);
	Destroy(other.gameObject);
	}

}
function OnTriggerEnter(other : Collider)
{
if(other.GetComponent.<Collider>().name == "hpPickup")
	{
	if(globalScript.health == 100)
	{
	globalScript.score +=100;
	}
	else
	{
	globalScript.health += 25;
	}
	
	Instantiate(fireworks, this.transform.position, Quaternion.identity);
	Destroy(other.gameObject);
	}
if(other.GetComponent.<Collider>().name == "mlPickup")
	{
	globalScript.megaammo += 500;
	playerscript.weapon = 2;
	Instantiate(fireworks, this.transform.position, Quaternion.identity);
	Destroy(other.gameObject);
	}
if(other.GetComponent.<Collider>().name == "rkPickup")
	{
	globalScript.rocketammo += 9;
	playerscript.weapon = 3;
	Instantiate(fireworks, this.transform.position, Quaternion.identity);
	Destroy(other.gameObject);
	}
	if(other.GetComponent.<Collider>().name == "acPickup")
	{
	globalScript.laserammo += 25;
	Instantiate(fireworks, this.transform.position, Quaternion.identity);
	Destroy(other.gameObject);
	}
	if(other.GetComponent.<Collider>().name == "drPickup")
	{
	globalScript.laserammo += 100;
	Instantiate(fireworks, this.transform.position, Quaternion.identity);
	Destroy(other.gameObject);
	DoubleRate();
	}
	if(other.GetComponent.<Collider>().name == "Explosion")
	{
	globalScript.health -= 5;
	}
}

function DoubleRate(){
playerscript.laserspeed = 0.05;
playerscript.lasertype = 2;
yield WaitForSeconds(10);
playerscript.lasertype = 1;
playerscript.laserspeed = .2;
}