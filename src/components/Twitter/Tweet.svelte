<script lang="ts">
  export let user, comment_count, retweet_count, likes_count;
</script>

<style lang="scss">
  section {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 50px auto;
    gap: 20px;
    margin-top: 1em;
    margin-bottom: 1em;

    img {
      width: 100%;
      margin: 10px;
    }

    article {
      display: grid;
      grid-auto-flow: row;

      header {
        display: grid;
        grid-auto-flow: column;
        margin-bottom: 5px;
        color: rgb(136, 153, 166);

        h3 {
          font-weight: bold;
          color: white;
        }
        h6 {
          margin-left: -1em;
        }
      }

      p {
        color: whitesmoke;
        padding-right: 2em;
      }

      menu {
        display: grid;
        justify-items: start;
        align-items: center;
        grid-auto-flow: column;
        color: rgb(136, 153, 166);

        i {
          padding-right: 10px;
          padding-top: 10px;
        }
      }
    }
  }
</style>

<section>
  <img src={user.profileImage} alt="Profile" />
  <article>
    <header>
      <h3>Display Name</h3>
      <h6>@username - 19h</h6>
      <i class="fal fa-ellipsis-h-alt" />
    </header>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo vitae
      architecto deleniti, delectus nam consequatur exercitationem illum sed
      nobis quidem sint magnam quibusdam similique, repellendus consectetur
      placeat sunt! Esse, voluptate?
    </p>
    <menu>
      <span><i class="fal fa-comment" />{comment_count}</span>
      <span><i class="fal fa-retweet" />{retweet_count}</span>
      <span><i class="fal fa-heart" />{likes_count}</span>
      <i class="fal fa-upload" />
    </menu>
  </article>
</section>
