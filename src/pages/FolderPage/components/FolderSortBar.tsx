import SortButton from './SortButton';
import '../styles/folderSortBar.css';
import FolderAddButton from './FolderAddButton';

interface FolderSortBarProps {
  folders: any[];
  handleClick: (e: Event) => void;
  selectedId: number;
}
function FolderSortBar({
  folders,
  handleClick,
  selectedId,
}: FolderSortBarProps) {
  return (
    <div className="folder__sort-bar">
      <div className="folder__sort-bar--sort-buttons">
        {folders.map((folder) => (
          <SortButton
            key={folder.id}
            id={folder.id}
            text={folder.name}
            handleClick={handleClick}
            isClicked={selectedId === folder.id}
          />
        ))}
      </div>

      <FolderAddButton />
    </div>
  );
}
export default FolderSortBar;
