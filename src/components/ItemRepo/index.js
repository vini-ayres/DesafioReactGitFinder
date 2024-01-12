import { ItemContainer } from './styles'

const ItemRepo = ({repo, handleRemoveRepo}) => {

  const handleClickRemoveRepo = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemoveRepo}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <hr />
      <a href={repo.html_url} target="_blank">Ver repositório</a>
      <a className='remover' onClick={handleClickRemoveRepo}>Remover</a>
    </ItemContainer>
  )
}

export default ItemRepo;
