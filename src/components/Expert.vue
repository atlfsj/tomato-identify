<template>
    <div>
        <form action="http://192.168.1.107:5000" method="post" enctype="multipart/form-data">
            <input type="text" name="text"> <input type="submit" value="上传">
        </form>
        <div class="result">{{ result }}
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
export default {
    setup() {
        const result = ref("");
        document.addEventListener('click', function () {
            fetch('http://127.0.0.1:5000')
                .then(response => {
                    if (response.ok) return response.blob();

                    throw new Error('Network response was not ok.');
                })
                .catch(error => console.error('Fetch error:', error));
            result.value = response.blob();
            console.log("result.value");
        });
        return {
            result
        }
    }
}
</script>