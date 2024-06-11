export default function PhotoModal({
  pramas: { id: photoId },
}: {
  pramas: { id: string };
}) {
  return <div>Photo {photoId}</div>;
}
