var target : GameObject;
var bullet : GameObject;
var flames : GameObject;
var greenbullet : GameObject;
var megalaser : GameObject;
var playerrocket : GameObject;
var moveSpeed : float = 0.1;
var dashSpeed : float = 1;
var dashing = false;
var running = false;
var laserrate : float = .5;
var globals : GameObject;
var globalScript : Globals;
var weapon : int = 1;
var laserspeed : float = .2;
var lasertype : int = 1;
var playerleft : Material;
var playerright : Material;
var playerdown : Material;
var animate : boolean = false;

function Start () {
target = GameObject.Find("Cursor");
globals = GameObject.Find("Spawner");
globalScript = globals.GetComponent("Globals");
}

function Update () {
animate = false;
GetComponent.<Rigidbody>().velocity = Vector3(0,0,0);
laserrate += Time.deltaTime;
if(dashing == false){
this.transform.LookAt(target.transform.position);
}
this.transform.eulerAngles.x = 0;

/*if (Input.GetKey ("w"))
{
this.transform.position += Vector3.Scale(this.transform.forward, Vector3(moveSpeed, moveSpeed, moveSpeed));
}
if (Input.GetKey ("s"))
{
this.transform.position -= Vector3.Scale(this.transform.forward, Vector3(moveSpeed, moveSpeed, moveSpeed));
}*/
if(Input.GetKeyDown("1"))
{
weapon = 1;
}
if(Input.GetKeyDown("2"))
{
weapon = 2;
}
if(Input.GetKeyDown("3"))
{
weapon = 3;
}
if(Input.GetKey(KeyCode.LeftShift))
{
moveSpeed = 0.2;
}
else
{
moveSpeed = 0.1;
}
if (Input.GetKey ("w"))
{
animate = true;
transform.position.z += moveSpeed;
}
if (Input.GetKey ("s"))
{
animate = true;
transform.position.z -= moveSpeed;
}
if (Input.GetKey ("a"))
{
animate = true;
transform.position.x -= moveSpeed;
} 
if (Input.GetKey ("d"))
{
animate = true;
transform.position.x += moveSpeed;
}
if (Input.GetKeyDown("space"))
{
DashForward();
}
if (Input.GetKeyDown("q"))
{
if(globalScript.rocketammo > 0)
				{
					if(laserrate >=.5)
					{
					burst();
					globalScript.rocketammo -=3;
					}
				}
}
if (Input.GetKey("e"))
{
if(globalScript.megaammo > 0)
				{
					globalScript.megaammo -=1;
					Instantiate(megalaser,this.transform.position,Quaternion.identity);
				}
}
/*if (Input.GetKeyDown(KeyCode.Space) && (Input.GetKey ("d"))) 
{
DashRight();
}
if (Input.GetKeyDown(KeyCode.Space) && (Input.GetKey ("a"))) 
{
DashLeft();
}*/
if(Input.GetMouseButton(1))
	{
	Instantiate(flames,this.transform.position,Quaternion.identity);
	}
if(Input.GetMouseButton(0))
	{
			if(globalScript.laserammo > 0)
				{
					if(laserrate >=laserspeed)
					{
						globalScript.laserammo -=1;
						if(lasertype == 1)
						{
						Instantiate(bullet,this.transform.position,Quaternion.identity);
						}
						if(lasertype == 2)
						{
						Instantiate(greenbullet,this.transform.position,Quaternion.identity);
						}
						laserrate = 0;
					}
				}
		/*if(weapon == 2)
		{
			if(globalScript.megaammo > 0)
				{
					globalScript.megaammo -=1;
					Instantiate(megalaser,this.transform.position,Quaternion.identity);
				}
		}*/
	if(globalScript.megaammo == 0 && globalScript.rocketammo == 0)
		{
		weapon = 1;
		}
	}
if(Input.GetMouseButtonDown(0))
	{
		/*if(weapon == 3)
		{
			if(globalScript.rocketammo > 0)
				{
					if(laserrate >=.5)
					{
					burst();
					globalScript.rocketammo -=3;
					}
				}
		}*/
	}
}

function DashRight(){
if(dashing == false){
var i : int = 0;
dashing = true;
while(i<5)
	{
	this.transform.position += Vector3.Scale(transform.right, Vector3(dashSpeed, dashSpeed, dashSpeed));
	yield WaitForEndOfFrame();
	i++;
	}
dashing=false;
}
}

function DashLeft(){
if(dashing == false){
var i : int = 0;
dashing = true;
while(i<5)
	{
	this.transform.position -= Vector3.Scale(transform.right, Vector3(dashSpeed, dashSpeed, dashSpeed));
	yield WaitForEndOfFrame();
	i++;
	}
dashing=false;
}
}
function DashForward(){
if(dashing == false){
var i : int = 0;
dashing = true;
while(i<5)
	{
	this.transform.position += Vector3.Scale(transform.forward, Vector3(dashSpeed, dashSpeed, dashSpeed));
	yield WaitForEndOfFrame();
	i++;
	}
dashing=false;
}
}
function burst(){
	Instantiate(playerrocket,this.transform.position,Quaternion.identity);
	yield WaitForSeconds(0.2);
	Instantiate(playerrocket,this.transform.position,Quaternion.identity);
	yield WaitForSeconds(0.2);
	Instantiate(playerrocket,this.transform.position,Quaternion.identity);
}

