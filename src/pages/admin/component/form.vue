<template>
  <div>
    <form class="rounded-card form-control gap-6">
      <div class="form-control w-52">
        <label class="label cursor-pointer">
          <span class="label-text">Remember me</span>
          <input type="checkbox" checked class="checkbox-secondary checkbox" />
        </label>
      </div>
      <div>
        <input type="file" class="file-input-bordered file-input-secondary file-input w-full max-w-xs" />
      </div>
      <div class="flex space-x-4">
        <input type="radio" name="radio-3" class="radio-secondary radio" checked />
        <input type="radio" name="radio-3" class="radio-secondary radio" />
      </div>
      <div class="form-control"><input type="range" min="0" max="100" value="40" class="range range-secondary" /></div>
      <div class="rating rating-half rating-lg">
        <input type="radio" name="rating-10" class="rating-hidden" />
        <input type="radio" name="rating-10" class="mask mask-half-1 mask-star-2 bg-green-500" />
        <input type="radio" name="rating-10" class="mask mask-half-2 mask-star-2 bg-green-500" />
        <input type="radio" name="rating-10" class="mask mask-half-1 mask-star-2 bg-green-500" checked />
        <input type="radio" name="rating-10" class="mask mask-half-2 mask-star-2 bg-green-500" />
        <input type="radio" name="rating-10" class="mask mask-half-1 mask-star-2 bg-green-500" />
        <input type="radio" name="rating-10" class="mask mask-half-2 mask-star-2 bg-green-500" />
        <input type="radio" name="rating-10" class="mask mask-half-1 mask-star-2 bg-green-500" />
        <input type="radio" name="rating-10" class="mask mask-half-2 mask-star-2 bg-green-500" />
        <input type="radio" name="rating-10" class="mask mask-half-1 mask-star-2 bg-green-500" />
        <input type="radio" name="rating-10" class="mask mask-half-2 mask-star-2 bg-green-500" />
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Pick the best fantasy franchise</span>
          <span class="label-text-alt">Alt label</span>
        </label>
        <select class="select-bordered select">
          <option disabled selected>Pick one</option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
        <label class="label">
          <span class="label-text-alt">Alt label</span>
          <span class="label-text-alt">Alt label</span>
        </label>
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">What is your name?</span>
          <span class="label-text-alt">Top Right label</span>
        </label>
        <input type="text" placeholder="Type here" class="input-bordered input w-full max-w-xs" />
        <label class="label">
          <span class="label-text-alt">Bottom Left label</span>
          <span class="label-text-alt">Bottom Right label</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your bio</span>
          <span class="label-text-alt">Alt label</span>
        </label>
        <textarea class="textarea-bordered textarea h-24" placeholder="Bio"></textarea>
        <label class="label">
          <span class="label-text-alt">Your bio</span>
          <span class="label-text-alt">Alt label</span>
        </label>
      </div>
      <div class="form-control w-52">
        <label class="label cursor-pointer">
          <span class="label-text">Remember me</span>
          <input type="checkbox" class="toggle-secondary toggle" checked />
        </label>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
