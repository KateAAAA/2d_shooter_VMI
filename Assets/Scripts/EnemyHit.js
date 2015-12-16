var explosion : GameObject;
var hit = false;
var percentage : int;
var hpPickup : GameObject;
var mlPickup : GameObject;
var rkPickup : GameObject;
var acPickup : GameObject;
var globals : GameObject;
var globalScript : Globals;
var spawner : GameObject;
var spawnscript : RandomSpawn;


function Start()
{
globals = GameObject.Find("Spawner");
globalScript = globals.GetComponent("Globals");
spawner = GameObject.Find("Spawner");
spawnscript = spawner.GetComponent("RandomSpawn");
}

function OnCollisionEnter(collision : Collision){
if(collision.gameObject.tag == "Bullet")
	{
	hit = true;
	Instantiate(explosion, this.transform.position, Quaternion.identity);
	percentage = Random.Range(0,100);
	globalScript.score += 10;
	if(percentage>=98)
		{
		Instantiate(mlPickup, this.transform.position, Quaternion.identity);
		}
	if(percentage>10 && percentage <=20)
		{
		Instantiate(rkPickup, this.transform.position, Quaternion.identity);
		}
	if(percentage>20 && percentage <=40)
		{
		Instantiate(acPickup, this.transform.position, Quaternion.identity);
		}
	Destroy(gameObject);
	spawnscript.amount -=1;
	}

}
function OnTriggerEnter(collision : Collider){
if(collision.gameObject.tag == "Bullet")
	{
	hit = true;
	Instantiate(explosion, this.transform.position, Quaternion.identity);
	percentage = Random.Range(0,100);
	globalScript.score += 10;
		if(percentage>=95)
		{
		Instantiate(mlPickup, this.transform.position, Quaternion.identity);
		}
	if(percentage>10 && percentage <=20)
		{
		Instantiate(rkPickup, this.transform.position, Quaternion.identity);
		}
	if(percentage>20 && percentage <=40)
		{
		Instantiate(acPickup, this.transform.position, Quaternion.identity);
		}
	Destroy(gameObject);
	spawnscript.amount -=1;
	}

}