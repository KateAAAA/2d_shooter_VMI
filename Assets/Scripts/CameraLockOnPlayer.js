var player : GameObject;

function Start () {
player = GameObject.Find("Player");
}

function Update () {
//this.transform.position = player.transform.position;
this.transform.position = Vector3.Lerp(this.transform.position, player.transform.position, .025);
this.transform.position.y = 15;
GetComponent.<Camera>().orthographicSize -= 10 * Input.GetAxis("Mouse ScrollWheel");
}