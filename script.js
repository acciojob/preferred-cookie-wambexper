//your JS code here. If required.
 function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        }

        // Function to get cookie value by name
        function getCookie(name) {
            var nameEQ = name + "=";
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                while (cookie.charAt(0) === ' ') {
                    cookie = cookie.substring(1, cookie.length);
                }
                if (cookie.indexOf(nameEQ) === 0) {
                    return cookie.substring(nameEQ.length, cookie.length);
                }
            }
            return null;
        }

        // Function to apply user preferences
        function applyPreferences() {
            var fontSize = getCookie("fontSize");
            var fontColor = getCookie("fontColor");

            if (fontSize) {
                document.body.style.fontSize = fontSize + "px";
                document.getElementById("fontSize").value = fontSize;
            }

            if (fontColor) {
                document.body.style.color = fontColor;
                document.getElementById("fontColor").value = fontColor;
            }
        }

        // Apply preferences on page load
        applyPreferences();

        // Event listener for Apply Changes button
        document.getElementById("applyBtn").addEventListener("click", function (e) {
			e.preventDefault();
            var fontSize = document.getElementById("fontSize").value;
            var fontColor = document.getElementById("fontColor").value;

            // Set preferences as cookies
            setCookie("fontSize", fontSize, 365);
            setCookie("fontColor", fontColor, 365);

            // Apply changes
            applyPreferences();
        });
