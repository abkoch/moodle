<script type="text/javascript">
   function greetUser() {
       var el = document.getElementById('user-notifications');
       var nameel = document.getElementsByClassName('logininfo');
       if (el && nameel) {
           var name = nameel[1].getElementsByTagName('a')[0].innerHTML;
           var newel = document.createElement("div");
           newel.style = 'border: 1px solid #cccccc; border-radius: 5px; background-color: #a7cff2; padding: 5px;';
           newel.innerHTML = '<span style="font-size: 20px; font-weight: bold;">Hallo ' + name + '! Schön, dass Sie da sind.</span>';
           el.appendChild(newel);
       }
   }
   document.addEventListener("DOMContentLoaded", greetUser);
</script>
