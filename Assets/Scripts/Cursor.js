var mainCamera : GameObject;

function Start (){
mainCamera = GameObject.Find("Main Camera");
}

function Update () {
/*var xx = Input.mousePosition.x;
var zz = Input.mousePosition.y;
this.transform.position.x = xx;
this.transform.position.z = zz;*/

    while (Input.GetMouseButton(0))
    {
    var temp = Input.mousePosition;
    temp.z = .5;
    transform.position = Camera.main.ScreenToWorldPoint(temp);
    }
}