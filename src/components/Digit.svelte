<script lang="ts">
    import Clock from './Clock.svelte';
    import { rotations, type Rotations } from '../resources/rotations';

    export let value: number;

    let rotationsArray: Rotations;
    $: rotationsArray = rotations[value];
</script>

<div class="digit">
    <div class="column">
        <Clock rotateHours={rotationsArray[0].rotateHours} rotateMinutes={rotationsArray[0].rotateMinutes} />
        <Clock rotateHours={rotationsArray[1].rotateHours} rotateMinutes={rotationsArray[1].rotateMinutes} />
        <Clock rotateHours={rotationsArray[2].rotateHours} rotateMinutes={rotationsArray[2].rotateMinutes} />
    </div>

    <div class="column">
        <Clock rotateHours={rotationsArray[3].rotateHours} rotateMinutes={rotationsArray[3].rotateMinutes} />
        <Clock rotateHours={rotationsArray[4].rotateHours} rotateMinutes={rotationsArray[4].rotateMinutes} />
        <Clock rotateHours={rotationsArray[5].rotateHours} rotateMinutes={rotationsArray[5].rotateMinutes} />
    </div>
</div>

<style>
    .digit {
        display: flex;
        gap: var(--gap);
    }

    .column {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
    }
</style>
