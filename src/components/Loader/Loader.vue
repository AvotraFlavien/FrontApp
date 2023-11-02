<template>
  <div class="bg-modal">
    <div class="model-content">
      <p style="padding-top: 100px; padding-left: 200px">
        <span class="loader"></span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.bg-modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: none; */
}
.model-content {
  width: 500px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  position: relative;
  /* display: none; */
}
</style>