var player : GameObject;
var playerpos : Vector3;
var percentage : int;
var moveSpeed : Vector3;

function Start () {
player = GameObject.Find("Player");
FindPlayer();
}

function Update () {
percentage = Random.Range(0, 100);
if (percentage<=1)
{
FindPlayer();
}
this.transform.LookAt(playerpos);
this.transform.position += Vector3.Scale(transform.forward, moveSpeed);

}

function FindPlayer(){
playerpos = player.transform.position;
}